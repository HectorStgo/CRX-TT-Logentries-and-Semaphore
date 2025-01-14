$( document ).ready(function() {
  // Logentries
  $("div.EventsCard--eventsTitle").after("<a href='javascript:void(0);' class='logentries-chrome-ext' style='font-size: 15px; white-space: nowrap;'>Expand All Results</a>");
  $(".logentries-chrome-ext").on("click", logentries_expand_results);

  function logentries_expand_results(){
    $(".r7-icon-search-rawlog-mag").click();
  }

  // Semaphore
  $("div#wait-info").before("<a href='javascript:void(0);' class='semaphore-chrome-ext' style='font-size: 15px; white-space: nowrap; float: right;'>Expand All Failures</a>");
  $(".semaphore-chrome-ext").on("click", semaphore_expand_failures);

  function semaphore_expand_failures(){
    $(".c-filter-projects_icon_failed").click();
    $(".c-results_list_command").click()
  }
});
