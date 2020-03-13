export const uIModel = `
<flex-container fxLayout="column" fxLayoutAlign="start stretch" fxLayoutGap="8px"
  width="100%" height="100%" margin="8px">

  <text fxFlex="50px" text-style="h1">Header 1</text>

  <!-- content container -->
  <flex-container fxLayout="row">
  <text fxFlex="100%" text-style="h2">Header 2</text>
  <text fxFlex="100%" text-style="h3">Header 3</text>
  </flex-container>

  <!-- footer -->
  <flex-container fxLayout="row" fxLayoutAlign="end center" margin="4px 6px">
  <button on-click="save()" type="button">Save</button>
  <button on-click="cancel()" type="button">Cancel</button>
  </flex-container>
</flex-container>
`;

export const dataModel = {};

export const scripts = `
def save():
  print("save")

def cancel():
  print("cancel")
`;
