
function abrirGraficoModal() {
  const htmlOutput = HtmlService.createHtmlOutputFromFile('GraficoModal')
    .setWidth(800)
    .setHeight(600)
    .setSandboxMode(HtmlService.SandboxMode.IFRAME)
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Gráfico de Realizado vs Meta')
}


function obterDadosParaGrafico() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  const aba = planilha.getSheetByName('data');

  if (!aba) {
    console.log("A aba 'data' não foi encontrada.");
    return { meses: [], realizado: [], meta: [] };
  }

  const lastRow = aba.getLastRow();
  const range = aba.getRange(`A2:C${lastRow}`);
  const dados = range.getValues();

  const meses = [];
  const realizado = [];
  const meta = [];

  dados.forEach(linha => {
    meses.push(
      linha[0] instanceof Date
        ? linha[0].toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '').toUpperCase()
        : linha[0]
    );
    realizado.push(linha[1] * 100); // Multiplica para transformar em porcentagem
    meta.push(linha[2] * 100);      // Multiplica para transformar em porcentagem
  });

  console.log({ meses, realizado, meta }); // Log para verificar os dados
  return { meses, realizado, meta };
}

