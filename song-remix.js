//Sol1
function songDecoder(song) {
    return song
                .replace(/(WUB)+/g, " ")
                .trim();
} 

//Sol2
const songDecoder = song => song.replace(/(WUB)+/g, " ").trim();

songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")

//Sol3

const songDecoder = song => song.split("WUB").filter(Boolean).join(" ");
songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
