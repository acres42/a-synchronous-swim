const HttpFetcher = {

  server: 'http://127.0.0.1:3000',

  fetchCommand: function() {
    $.ajax({
      url: HttpFetcher.server,
      type: 'GET',
      data: '',
      contentType: 'text/plain',
      success: function(data) {
        SwimTeam.move(data)
      },
      error: function(error) {
        console.error('a-synchronous-swim: failed to get command', error);
      }
    });
  },

  readCommand: function(message) {
    $.ajax({
      url: HttpFetcher.server,
      type: 'POST',
      data: message[1].toLowerCase(),
      contentType: 'application/json',
      success: function(data) {
        SwimTeam.move(data)
      },
      error: function(error) {
        console.error('a-synchronous-swim: failed to get command', error);
      }
    });
  },

};