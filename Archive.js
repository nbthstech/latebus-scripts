function archive() {
  const spreadSheet = SpreadsheetApp.getActive()
  const responses = spreadSheet.getSheetByName("responses")
  const archive = spreadSheet.getSheetByName("archive")
  const lastResponse = responses.getRange(2, 1).getDataRegion(SpreadsheetApp.Dimension.ROWS).getLastRow()
  const firstArchiveEmptyRow = archive.getRange(2, 1).getDataRegion(SpreadsheetApp.Dimension.ROWS).getLastRow() + 1
  const daysResponses = responses.getRange("A2:H" + lastResponse)
  const nextArchiveRange = archive.getRange(firstArchiveEmptyRow, 1)
  daysResponses.copyTo(nextArchiveRange)
  const numResponses = lastResponse-1
  responses.deleteRows(2, numResponses)
  responses.insertRows(2, numResponses)
  archive.insertRowsAfter(firstArchiveEmptyRow + numResponses, numResponses)
}
