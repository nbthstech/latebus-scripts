function emailer() {
  const today = new Date().getDay()
  Logger.log(today)
  if (today === 2 || today === 3 || today === 4) {
    Logger.log("Bus day")
    const emails = [
      "arafano@nbtschools.org",
      "ktreadwell@nbtschools.org",
      "rpetronko@nbtschools.org",
    ]
    const dhrolia = "idhrolia@nbtschools.org"
    const subject = "Late Bus Signups"
    const body = "Link to sheet: \n\thttps://docs.google.com/spreadsheets/d/1igHl_gk_PCNEZpnmEIqeFZoCUIBAdV7XDeLY8as78B8/edit?usp=sharing"
    for (index in emails) {
      var email = emails[index]
      MailApp.sendEmail(email, dhrolia, subject, body)
      Logger.log("Emailed: " + email.substring(0,email.indexOf("@")))
    }
  }
  else {
    Logger.log("Weekend | Fri | Mon")
  }
}
