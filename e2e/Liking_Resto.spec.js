Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
  });

  Scenario('Melakukan Proses Menyukai dan Tidak Menyukai  Resto', ({ I }) => {
    I.seeElement( '#restos');
    I.see('', '#restos');
    I.amOnPage('/');

    //menyukai resto
    I.waitForElement('.headline .content-div a ',20);
    I.seeElement('.headline .content-div a');
    I.click(locate('.headline .content-div a').first()); 

    I.waitForElement('#likeButton', 20);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');

    //tidakmenyukairesto
   
    I.waitForElement('.headline .content-div a',20);
    I.seeElement('.headline .content-div a');
    I.click(locate('.headline .content-div a').first()); 
    
    
    I.seeElement('#likeButton');
    I.click('#likeButton');
    I.amOnPage('/#/like');
   
    I.seeElement( '#restos');
    I.see('', '#restos');
   
});