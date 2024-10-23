const myobj = [
    {
        book: 'computer fundamental',
        authorname: 'jems ghosale',
        publishion: '1991',
        Edition: '2004',
    },
    {
        book: 'c programming',
        authorname: 'jems chadvik',
        publishion: '2000',
        Edition: '2007',
    },
    {
        book: 'Data Structure',
        authorname: 'biilgates',
        publishion: '2014',
        Edition: '2019',
    },
    {
        book: 'computer fundamental',
        authorname: 'jems ghosale',
        publishion: '2003',
        Edition: '2014',
    },
];

const mybooks = myobj.filter((item) => item.book === 'computer fundamental');

console.log(mybooks);
