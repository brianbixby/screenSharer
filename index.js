var express = require('express');
var app = express();

var config = {
  projectId: 'subtitlemaker-159302',
  keyFilename: '/Users/brianbixby/code/week11/day59/screenSharer/subtitlemaker-5bb11de3a2bf.json'
};
// Imports the Google Cloud client library
var speech = require('@google-cloud/speech')(config);

// Your Google Cloud Platform project ID
var projectId = 'subtitlemaker-159302';

var speechClient = Speech({
  projectId: projectId
});

// The name of the audio file to transcribe
var fileName = 'test.m4a';

// The audio file's encoding and sample rate
var options = {
  encoding: 'LINEAR16',
  sampleRate: 16000
};

// Detects speech in the audio file
speechClient.recognize(fileName, options)
  .then((results) => {
    var transcription = results[0];
    console.log(`Transcription: ${transcription}`);
  });

var server = app.listen(process.env.PORT || 3000);
module.exports = server;
