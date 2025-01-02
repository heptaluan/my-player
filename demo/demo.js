


const ap4 = new APlayer({
    element: document.getElementById('player4'),
    mini: false,
    autoplay: false,
    lrcType: false,
    mutex: true,
    theme: '#733cf5',
    order: 'list',
    preload: 'none',
    loop: 'all',
    audio: [{
        name: '光るなら',
        artist: 'Goose house',
        url: './silence.mp3',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/hikarunara.lrc',
    }, {
        name: 'トリカゴ',
        artist: 'XX:me',
        url: './silence.mp3',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/darling.lrc',
    }, {
        name: '前前前世',
        artist: 'RADWIMPS',
        url: './silence.mp3',
        lrc: 'https://cn-south-17-aplayer-46154810.oss.dogecdn.com/yourname.lrc',
    },]
});
