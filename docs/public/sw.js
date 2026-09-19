self.addEventListener('fetch', event => {
    const url = event.request.url;
    if (url.hostname === 'challenges.cloudflare.com') {
        const newUrl = url.replace('challenges.cloudflare.com', 'challenges.virmath.com');
        event.respondWith(fetch(newUrl, event.request));
    } else {
        event.respondWith(fetch(event.request));
    }
});