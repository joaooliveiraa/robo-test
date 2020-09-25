const puppeteer = require("puppeteer");


async function robo() {
  
  const browser = await puppeteer.launch({ headless: false }); //headless: false - para mostrar o navegador
  const page = await browser.newPage();
  await page.goto("https://logos.setrem.com.br/login.aspx#://example.com");
  //await page.screenshot({ path: "example.png" }); tira print
  
  await page.type("#txtusername", '');
  await page.waitFor(500);
  await page.type("#txtpassword", '*');
  await page.waitFor(500);
  await page.click("#btnEfetuarLogin");
  //Autencicação
  await page.waitFor(1000);
  await page.evaluate(() => document.querySelector('#Linkbutton1').click());
  await page.waitFor(1000);
  await page.evaluate(() => document.getElementsByClassName('link-turma')[1].click());
  await page.waitFor(1000);
  await page.evaluate(() => document.querySelector('#btn').click());
  await page.waitFor(3000);
  await page.evaluate(() => document.querySelector('#MainContent_gvMateriais tbody').rows[1].cells[1].textContent.includes('Material') 
  ?  document.querySelector('#MainContent_gvMateriais_btnDownloadMaterialResposta_0').click() : '' );
  //Abrir google meet

}

function retornaDiaSemana() { //deixar a seleção dos dias dinamico.
  return new Date().getDay() === 5 ? 1 : new Date().getDay();
}

robo();

