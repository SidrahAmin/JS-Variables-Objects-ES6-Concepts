var library=[
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title:'Steve Jobs',
        author: 'Walter Issacson',
        readingStatus: true
    },
    {
        title:'MockingJay: The Final Book of the Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];
for(var i=0; i< library.length; i++)
{
    var book= " ' " + library[i].title + 'by' + library[i].author + ".";
    if(library[i].readingStatus){
        console.log("Already read"+ book);
    } else
    {
        console.log("You still need to read"+ book);
    }
}