export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST':
            return {...state, listOdon: action.payload}
        case 'GET_DETAIL':
            return {...state, detailOdon: action.payload}
        case 'ADD_FAV':
                return {...state, favs: [...state.favs, action.payload]
                }
        case 'DELETE_FAV':
                const filtrarFavs = state.favs.filter((fav) => fav.id !== action.payload)
                return {...state, favs: filtrarFavs}
        case 'THEME':
            return {...state, theme: state.theme === 'dark' ? 'light' : 'dark'}
    }
}