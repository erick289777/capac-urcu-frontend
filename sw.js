self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request).then((response) => {
            const newHeaders = new Headers(response.headers);
            newHeaders.set("Content-Security-Policy", "default-src 'self'");
            newHeaders.set("X-Frame-Options", "SAMEORIGIN");
            newHeaders.set("X-Content-Type-Options", "nosniff");
            newHeaders.set("Referrer-Policy", "no-referrer-when-downgrade");
            newHeaders.set("Permissions-Policy", "geolocation=(self), microphone=()");

            const moddedResponse = new Response(response.body, {
                status: response.status,
                statusText: response.statusText,
                headers: newHeaders,
            });
            return moddedResponse;
        })
    );
});
