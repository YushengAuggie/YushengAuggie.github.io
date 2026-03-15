#!/usr/bin/env bash
set -u

HTML_FILE="index.html"
CSS_FILE="style.css"
AVATAR_FILE="avatar.jpg"

pass_count=0
fail_count=0

pass() {
  pass_count=$((pass_count + 1))
  printf '[PASS] %s\n' "$1"
}

fail() {
  fail_count=$((fail_count + 1))
  printf '[FAIL] %s\n' "$1"
}

check_file_nonempty() {
  local file="$1"
  if [ -s "$file" ]; then
    pass "$file exists and is non-empty"
  else
    fail "$file is missing or empty"
  fi
}

contains() {
  local file="$1"
  local pattern="$2"
  if grep -Eq "$pattern" "$file"; then
    return 0
  fi
  return 1
}

check_sections() {
  local ok=0
  local patterns=(
    'id="hero"'
    'id="about"'
    'id="projects"'
    'id="footer"'
  )

  for p in "${patterns[@]}"; do
    if contains "$HTML_FILE" "$p"; then
      :
    else
      ok=1
      fail "Missing section marker: $p"
    fi
  done

  if [ "$ok" -eq 0 ]; then
    pass "All required sections present (hero, about, projects, footer)"
  fi
}

check_project_links() {
  local urls=(
    'https://github.com/YushengAuggie/byte-by-byte'
    'https://github.com/YushengAuggie/phabricator-mcp-server'
    'https://github.com/YushengAuggie/poe-bot-host'
  )
  local missing=0

  for url in "${urls[@]}"; do
    if contains "$HTML_FILE" "href=\"$url\""; then
      :
    else
      missing=1
      fail "Missing project link: $url"
    fi
  done

  if [ "$missing" -eq 0 ]; then
    pass "All 3 project links are present"
  fi
}

check_avatar() {
  if [ -f "$AVATAR_FILE" ] && contains "$HTML_FILE" 'src="avatar.jpg"'; then
    pass "avatar.jpg exists and is referenced in HTML"
  else
    fail "avatar.jpg missing or not referenced"
  fi
}

check_html_balanced_tags() {
  local output
  output=$(awk '
  BEGIN {
    stack_size = 0
    bad = 0
  }
  {
    line = $0
    while (match(line, /<[^>]+>/)) {
      tag = substr(line, RSTART, RLENGTH)
      line = substr(line, RSTART + RLENGTH)

      if (tag ~ /^<!/ || tag ~ /^<\?/) {
        continue
      }

      if (tag ~ /^<\//) {
        name = tag
        gsub(/^<\//, "", name)
        gsub(/[[:space:]].*$/, "", name)
        gsub(/>$/, "", name)
        if (stack_size == 0 || stack[stack_size] != name) {
          bad = 1
        } else {
          stack_size--
        }
      } else {
        if (tag ~ /\/>$/) {
          continue
        }

        name = tag
        gsub(/^</, "", name)
        gsub(/[[:space:]].*$/, "", name)
        gsub(/>$/, "", name)

        if (name ~ /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/) {
          continue
        }

        stack_size++
        stack[stack_size] = name
      }
    }
  }
  END {
    if (bad == 0 && stack_size == 0) {
      print "OK"
    } else {
      print "BAD"
    }
  }
  ' "$HTML_FILE")

  if [ "$output" = "OK" ]; then
    pass "HTML tags appear balanced"
  else
    fail "HTML tags appear unbalanced"
  fi
}

check_css_balanced_braces() {
  local opens closes
  opens=$(grep -o '{' "$CSS_FILE" | wc -l | tr -d ' ')
  closes=$(grep -o '}' "$CSS_FILE" | wc -l | tr -d ' ')

  if [ "$opens" = "$closes" ]; then
    pass "CSS braces are balanced"
  else
    fail "CSS braces are unbalanced (open=$opens close=$closes)"
  fi
}

check_required_meta() {
  local patterns=(
    '<meta charset="[^"]+"'
    '<meta name="viewport"[^>]*>'
    '<meta name="description"[^>]*>'
    '<meta property="og:title"[^>]*>'
    '<meta property="og:description"[^>]*>'
    '<meta property="og:image" content="https://[^"]*avatar.jpg"'
  )
  local missing=0

  for p in "${patterns[@]}"; do
    if contains "$HTML_FILE" "$p"; then
      :
    else
      missing=1
      fail "Missing required meta tag matching: $p"
    fi
  done

  if [ "$missing" -eq 0 ]; then
    pass "All required meta tags are present"
  fi
}

check_image_alt_text() {
  local missing
  missing=$(grep -Eo '<img[^>]*>' "$HTML_FILE" | grep -vcE 'alt="[^"]+"' || true)

  if [ "$missing" -eq 0 ]; then
    pass "All images include non-empty alt text"
  else
    fail "Found image(s) missing alt text"
  fi
}

check_no_localhost() {
  if contains "$HTML_FILE" 'localhost|127\.0\.0\.1'; then
    fail "HTML contains localhost URL(s)"
  else
    pass "No localhost URLs found"
  fi
}

check_social_links() {
  local patterns=(
    'href="mailto:auggie1024\.d@gmail\.com"'
    'href="https://github\.com/YushengAuggie"'
    'href="https://www\.linkedin\.com/in/yusheng-d-7857a775"'
    'href="https://x\.com/ThinkleDing"'
    'href="https://instagram\.com/formatmemory"'
  )
  local missing=0

  for p in "${patterns[@]}"; do
    if contains "$HTML_FILE" "$p"; then
      :
    else
      missing=1
      fail "Missing social link matching: $p"
    fi
  done

  if [ "$missing" -eq 0 ]; then
    pass "All required social links are present"
  fi
}

check_responsive_viewport() {
  if contains "$HTML_FILE" '<meta name="viewport" content="width=device-width, initial-scale=1\.0"'; then
    pass "Responsive viewport meta tag is correctly set"
  else
    fail "Responsive viewport meta tag is missing or incorrect"
  fi
}

main() {
  check_file_nonempty "$HTML_FILE"
  check_file_nonempty "$CSS_FILE"
  check_sections
  check_project_links
  check_avatar
  check_html_balanced_tags
  check_css_balanced_braces
  check_required_meta
  check_image_alt_text
  check_no_localhost
  check_social_links
  check_responsive_viewport

  printf '\nSummary: %d passed, %d failed\n' "$pass_count" "$fail_count"

  if [ "$fail_count" -gt 0 ]; then
    exit 1
  fi
  exit 0
}

main
