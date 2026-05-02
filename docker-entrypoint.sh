#!/bin/sh

# Substitute environment variables in HTML files
if [ -n "$VITE_API_BASE_URL" ]; then
    find /usr/share/nginx/html -name "*.html" -type f -exec sed -i "s|VITE_API_BASE_URL_PLACEHOLDER|$VITE_API_BASE_URL|g" {} \;
fi

if [ -n "$VITE_GA_TRACKING_ID" ]; then
    find /usr/share/nginx/html -name "*.html" -type f -exec sed -i "s|VITE_GA_TRACKING_ID_PLACEHOLDER|$VITE_GA_TRACKING_ID|g" {} \;
fi

# Execute the original nginx entrypoint
exec "$@"
