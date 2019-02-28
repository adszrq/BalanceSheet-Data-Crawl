function myFunction() {
  var today = new Date();
  var day = today.getDay();
  
   if (day == 4) {
  
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    if(dd<10){dd='0'+dd} 
    if(mm<10){mm='0'+mm} 
    var today = dd+'/'+mm+'/'+yyyy; //dd    "11/01/2016"
    
    $today = new Date();
    var $yesterday = new Date($today);
    $yesterday.setDate($today.getDate() - 1); //setDate also supports negative values, which cause the month to rollover.
    var $dd = $yesterday.getDate();
    var $mm = $yesterday.getMonth()+1; //January is 0!
    
    var $yyyy = $yesterday.getFullYear();
    if($dd<10){$dd='0'+$dd}
    if($mm<10){$mm='0'+$mm}
    $yesterday = $dd +'/'+$mm+'/'+$yyyy; //$dd "10/01/2016"
     

      
    var response = UrlFetchApp.fetch("https://www.federalreserve.gov/releases/h41/current").getContentText();
    var string2destroy = response
    var n = string2destroy.indexOf("Total assets");
    //var m = string2destroy.indexOf("</td>");
    var totalbalanceusd = string2destroy.substring(n+70,n+85);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
     
    
    var response = UrlFetchApp.fetch("https://www.macrotrends.net/2015/fed-funds-rate-historical-chart").getContentText();
    var n = response.indexOf("The current federal funds rate");
    var string2destroy = response.substring(n+1,n+200);
    var nn = string2destroy.indexOf("<strong");
    //var mm = string2destroy.indexOf("/strong");
    var fedrate = string2destroy.substring(nn+8,nn+13);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
     
     
    var response = UrlFetchApp.fetch("https://www.macrotrends.net/2488/sp500-10-year-daily-chart").getContentText();
    var n = response.indexOf("The current price of the S&P 500");
    var string2destroy = response.substring(n+1,n+200);
    var nn = string2destroy.indexOf("<strong");
    //var mm = string2destroy.indexOf("/strong");
    var sp500 = string2destroy.substring(nn+8,nn+16);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
     
     
    var response = UrlFetchApp.fetch("https://fred.stlouisfed.org/series/PCE").getContentText();
    var n = response.indexOf("series-meta-observation-value");
    //var string2destroy = response.substring(n+1,n+200);
    //var nn = string2destroy.indexOf("<strong");
    //var mm = string2destroy.indexOf("/strong");
    var pceindex = response.substring(n+31,n+39);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
     
     
    var response = UrlFetchApp.fetch("https://tradingeconomics.com/united-states/indicators").getContentText();
    var n = response.indexOf("Unemployment Rate");
    //var string2destroy = response.substring(n+1,n+200);
    //var nn = string2destroy.indexOf("<strong");
    //var mm = string2destroy.indexOf("/strong");
    var unemplrate = response.substring(n+300,n+350);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
     
     
    var response = UrlFetchApp.fetch("https://tradingeconomics.com/united-states/indicators").getContentText();
    var n = response.indexOf("Inflation Rate");
    //var string2destroy = response.substring(n+1,n+200);
    //var nn = string2destroy.indexOf("<strong");
    //var mm = string2destroy.indexOf("/strong");
    var inflrate = response.substring(n+300,n+350);
     //var extraction = extraction.trim().replace(/(\r\n|\n|\r)/g,"");
  
  
    fedrate = fedrate.replace("%", "");
    fedrate = fedrate.replace(",", "."); 
    fedrate = parseFloat(fedrate);
     
    totalbalanceusd = totalbalanceusd.replace(",", "");
    totalbalanceusd = totalbalanceusd.replace(",", ""); 
    totalbalanceusd = parseFloat(totalbalanceusd);
    
    sp500 = sp500.replace(",", "");
    sp500 = sp500.replace(",", "."); 
    sp500 = parseFloat(sp500);
  
    pceindex = pceindex.replace(",", "");
    pceindex = pceindex.replace(",", "."); 
    pceindex = parseFloat(pceindex);
  
    unemplrate = unemplrate.replace(",", "");
    unemplrate = unemplrate.replace(",", "."); 
    unemplrate = parseFloat(unemplrate);
  
    inflrate = inflrate.replace(",", "");
    inflrate = inflrate.replace(",", "."); 
    inflrate = parseFloat(inflrate);
  
  
  
    SpreadsheetApp.getActiveSheet().insertRowBefore(2);
    SpreadsheetApp.getActiveSheet().getRange('A2').setValue(today)
    SpreadsheetApp.getActiveSheet().getRange('B2').setValue(totalbalanceusd)
    SpreadsheetApp.getActiveSheet().getRange('C2').setValue(fedrate)
    SpreadsheetApp.getActiveSheet().getRange('D2').setValue(sp500)
    SpreadsheetApp.getActiveSheet().getRange('E2').setValue("=-1*(1-B2/B54)*100")
    SpreadsheetApp.getActiveSheet().getRange('F2').setValue("=-1*(1-B2/B6)*100")
    SpreadsheetApp.getActiveSheet().getRange('G2').setValue("=-1*(1-B2/B15)*100")
    SpreadsheetApp.getActiveSheet().getRange('H2').setValue(pceindex)
    SpreadsheetApp.getActiveSheet().getRange('I2').setValue(unemplrate)
    SpreadsheetApp.getActiveSheet().getRange('J2').setValue(inflrate)
    
    }
     
    }