#!/bin/bash
# beep.sh - emit a beep from Git Bash on Windows with frequency and duration
# Usage: ./scripts/beep.sh [frequencyHz] [durationMs]
# Examples:
#   ./scripts/beep.sh        # default 750 Hz, 300 ms
#   ./scripts/beep.sh 1000 500

freq=${1:-750}
dur=${2:-200}

if command -v powershell.exe >/dev/null 2>&1; then
  # Use Windows PowerShell (shipping on Windows)
  powershell.exe -NoProfile -Command "[console]::beep($freq,$dur)"
  powershell.exe -NoProfile -Command "[console]::beep($freq,$dur)"
  powershell.exe -NoProfile -Command "[console]::beep($freq,$dur)"
  exit $?
elif command -v pwsh >/dev/null 2>&1; then
  # Use PowerShell Core if available
  pwsh -NoProfile -Command "[console]::beep($freq,$dur)"
  exit $?
else
  # Fallback: BEL char (no frequency control)
  printf '\a'
  exit 0
fi
