import {combineReducers} from 'redux';

const songsReducer = () =>{
    return[
        {title: 'Catastrophist', duration: '7:37'},  //Songs from the band Trivium out of their album "What the Dead Men Say" (2020)
        {title: 'What the Dead Men Say', duration: '6:10'},
        {title: 'Amongst the Shadows & the Stones', duration: '5:41'},
        {title: 'Bleed into Me', duration: '4:14'}        
    ];
};

const selectedSongReducer = (selectedSong = null, action) =>{
    if(action.type ==='SONG_SELECTED'){
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});