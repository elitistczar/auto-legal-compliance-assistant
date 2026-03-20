function alcaAcceptAll(){ document.cookie = "alc_consent=full; path=/; max-age=31536000"; document.getElementById('alca-cookie-banner').style.display='none'; }
function alcaRejectAll(){ document.cookie = "alc_consent=essential; path=/; max-age=31536000"; document.getElementById('alca-cookie-banner').style.display='none'; }
function alcaShowPreferences(){ alert('Pro: full granular modal here'); }
if(!document.cookie.includes('alc_consent')) document.getElementById('alca-cookie-banner').style.display='block';
