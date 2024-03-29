# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  Stage 1

npm create vite@latest

Stage 2

module.exports = {
root: true,
env: { browser: true, es2020: true },
extends: [
"eslint:recommended",
"plugin:react/recommended",
"plugin:react/jsx-runtime",
"plugin:react-hooks/recommended",
],
ignorePatterns: ["dist", ".eslintrc.cjs"],
parserOptions: { ecmaVersion: "latest", sourceType: "module" },
settings: { react: { version: "18.2" } },
plugins: ["react-refresh"],
rules: {
"react/prop-types": 0,
"react-refresh/only-export-components": [
"warn",
{ allowConstantExport: true },
],
},
};

Stage 3

Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Подивіться демо-відео роботи застосунку.
API
https://api.unsplash.com/

npm install axios

{
"id": "g6Me5mUQQIQ",
"slug": "a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ",
"alternative_slugs": {
"en": "a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ",
"es": "una-persona-nadando-en-el-oceano-cerca-de-una-cueva-g6Me5mUQQIQ",
"ja": "洞窟の近くの海で泳いでいる人-g6Me5mUQQIQ",
"fr": "une-personne-nageant-dans-locean-pres-dune-grotte-g6Me5mUQQIQ",
"it": "una-persona-che-nuota-nelloceano-vicino-a-una-grotta-g6Me5mUQQIQ",
"ko": "동굴-근처-바다에서-수영하는-사람-g6Me5mUQQIQ",
"de": "eine-person-die-im-meer-in-der-nahe-einer-hohle-schwimmt-g6Me5mUQQIQ",
"pt": "uma-pessoa-nadando-no-oceano-perto-de-uma-caverna-g6Me5mUQQIQ"
},
"created_at": "2023-05-02T06:42:00Z",
"updated_at": "2024-03-29T00:33:30Z",
"promoted_at": null,
"width": 8192,
"height": 5464,
"color": "#0c73d9",
"blur_hash": "LW8~]fR5DNxn?]R=DjxB#zb{Iqi{",
"description": "The vibrant waters of NEOM are home to some of the most picturesque and pristine islands in the Red Sea | Islands of NEOM – NEOM, Saudi Arabia.",
"alt_description": "a person swimming in the ocean near a cave",
"breadcrumbs": [],
"urls": {
"raw": "https://images.unsplash.com/photo-1683009427666-340595e57e43?ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw&ixlib=rb-4.0.3",
"full": "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw&ixlib=rb-4.0.3&q=85",
"regular": "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw&ixlib=rb-4.0.3&q=80&w=1080",
"small": "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw&ixlib=rb-4.0.3&q=80&w=400",
"thumb": "https://images.unsplash.com/photo-1683009427666-340595e57e43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw&ixlib=rb-4.0.3&q=80&w=200",
"small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1683009427666-340595e57e43"
},
"links": {
"self": "https://api.unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ",
"html": "https://unsplash.com/photos/a-person-swimming-in-the-ocean-near-a-cave-g6Me5mUQQIQ",
"download": "https://unsplash.com/photos/g6Me5mUQQIQ/download?ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw",
"download_location": "https://api.unsplash.com/photos/g6Me5mUQQIQ/download?ixid=M3w1ODQ4Njd8MXwxfGFsbHwxfHx8fHx8Mnx8MTcxMTcyNjMzMXw"
},
"likes": 468,
"liked_by_user": false,
"current_user_collections": [],
"sponsorship": {
"impression_urls": [
"https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515523&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif",
"https://secure.insightexpressai.com/adServer/adServerESI.aspx?script=false&bannerID=11515726&rnd=[timestamp]&redir=https://secure.insightexpressai.com/adserver/1pixel.gif"
],
"tagline": "Made to Change",
"tagline_url": "https://www.neom.com/en-us?utm_source=unsplash&utm_medium=referral",
"sponsor": {
"id": "mYizSrdJkkU",
"updated_at": "2024-03-28T11:50:27Z",
"username": "neom",
"name": "NEOM",
"first_name": "NEOM",
"last_name": null,
"twitter_username": "neom",
"portfolio_url": "http://www.neom.com",
"bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
"location": "NEOM, Saudi Arabia",
"links": {
"self": "https://api.unsplash.com/users/neom",
"html": "https://unsplash.com/@neom",
"photos": "https://api.unsplash.com/users/neom/photos",
"likes": "https://api.unsplash.com/users/neom/likes",
"portfolio": "https://api.unsplash.com/users/neom/portfolio",
"following": "https://api.unsplash.com/users/neom/following",
"followers": "https://api.unsplash.com/users/neom/followers"
},
"profile_image": {
"small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
"medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
"large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
},
"instagram_username": "discoverneom",
"total_collections": 7,
"total_likes": 1,
"total_photos": 222,
"total_promoted_photos": 72,
"accepted_tos": true,
"for_hire": false,
"social": {
"instagram_username": "discoverneom",
"portfolio_url": "http://www.neom.com",
"twitter_username": "neom",
"paypal_email": null
}
}
},
"topic_submissions": {
"blue": {
"status": "approved",
"approved_on": "2023-07-31T17:06:29Z"
}
},
"asset_type": "photo",
"user": {
"id": "mYizSrdJkkU",
"updated_at": "2024-03-28T11:50:27Z",
"username": "neom",
"name": "NEOM",
"first_name": "NEOM",
"last_name": null,
"twitter_username": "neom",
"portfolio_url": "http://www.neom.com",
"bio": "Located in the northwest of Saudi Arabia, NEOM’s diverse climate offers both sun-soaked beaches and snow-capped mountains. NEOM’s unique location will provide residents with enhanced livability while protecting 95% of the natural landscape.",
"location": "NEOM, Saudi Arabia",
"links": {
"self": "https://api.unsplash.com/users/neom",
"html": "https://unsplash.com/@neom",
"photos": "https://api.unsplash.com/users/neom/photos",
"likes": "https://api.unsplash.com/users/neom/likes",
"portfolio": "https://api.unsplash.com/users/neom/portfolio",
"following": "https://api.unsplash.com/users/neom/following",
"followers": "https://api.unsplash.com/users/neom/followers"
},
"profile_image": {
"small": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
"medium": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
"large": "https://images.unsplash.com/profile-1679489218992-ebe823c797dfimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
},
"instagram_username": "discoverneom",
"total_collections": 7,
"total_likes": 1,
"total_photos": 222,
"total_promoted_photos": 72,
"accepted_tos": true,
"for_hire": false,
"social": {
"instagram_username": "discoverneom",
"portfolio_url": "http://www.neom.com",
"twitter_username": "neom",
"paypal_email": null
}
}
},
