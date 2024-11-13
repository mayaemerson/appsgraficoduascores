function onOpen() {
  const ui = SpreadsheetApp.getUi()
  ui.createMenu('Gráficos')
    .addItem('Grafico Web', 'abrirGraficoModal')
    .addToUi()
}
