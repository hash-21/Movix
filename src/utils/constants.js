
export const USER_AVATAR="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY,
    }

}

export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500";

export const BG_URL=" https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"

export const SUPPORTED_LANGUAGES=[{identifier: "en", name: "English"},{identifier: "hindi", name: "Hindi"},{identifier: "spanish", name: "Spanish"}]

export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY