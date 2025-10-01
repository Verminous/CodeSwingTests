var gr = new GlideRecord('incident');

gr.addQuery('active', true);
gr.addQuery('priority', 1);
gr.addQuery('category', 'software');

gr.query();

//while (gr.next()) {
//  gs.log(gr.getValue('number'));
//}

while (gr.next()) {
  gr.setValue('state', 2);
  gr.work_notes = "Record under review";
  gr.update();
  gs.log(gr.getValue('number'));
}

/////////////

while (gr.next()) {
  gr.setValue('state', 3); 

  var oldDescription = gr.getValue('short_description');
  var newDescription = 'ON HOLD: ' + oldDescription;
  gr.setValue('short_description', newDescription);

  gr.work_notes = "Record on hold";
  gr.update();
  gs.log(gr.getValue('number'));
}