export const uIModel = `
  <form onSubmit="contactUs(data)">
    <h3>Contact us</h3>
    <div class="row">
      <div class="col-12 col-md-4 mb-2">
        <label>Full Name*</label>
        <input class="form-control" binding="$.fullName" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>E-mail Address*</label>
        <input class="form-control" binding="$.email" onInput="onChange()" required="true" />
      </div>
      <div class="col-12 col-md-4 mb-2">
        <label>Phone</label>
        <input type="tel" class="form-control" binding="$.phone" />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <label>Message</label>
        <textarea class="form-control" rows="5" onInput="onChange()" binding="$.message" required="true" />
      </div>
    </div>
    <div class="row">
      <div class="col ml-auto">
        <button class="btn btn-primary" id="submitBtn" type="submit">SEND MESSAGE</button>
      </div>
    </div>
  </form>
`;

export const dataModel = {}

export const scripts = `
# Evaluated with JSPython https://jspython.dev/

def onChange():
  btn = getComponentById(rootUIModel, "submitBtn")
  btn.disabled = dataModel.fullName == null or dataModel.email == null or dataModel.message == null

def contactUs():
  alert("contactUs " + )
`;
