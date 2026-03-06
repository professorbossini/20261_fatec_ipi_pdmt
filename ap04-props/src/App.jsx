const App = () => (
  <div className="container border mt-2">

    <div className="row">
      <div className="col-12">
        {/* .i.fa.fa-hippo */}
        <div className="fa fa-hippo fa-2x p-3"></div>
      </div>
    </div>

    <div className="row">
      {/* .col-sm-12.col-lg-6.col-xxl-3*4    */}
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        {/* .card(.card-header+.card-body) */}
        <div className="card">
          <div className="card-header text-muted">15/04/2025</div>
          <div className="card-body d-flex">
            {/* i.fa-solid.fa-alarm-clock */}
            {/* .d-flex.align-items-center */}
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-alarm-clock fa-2x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Despertador</h4>
              <p className="text-center">Despertador analógico</p>
            </div>
          </div>
        </div>  

      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        <div className="card">
          <div className="card-header text-muted">16/04/2025</div>
          <div className="card-body d-flex">
            {/* i.fa-solid.fa-alarm-clock */}
            {/* .d-flex.align-items-center */}
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-shirt fa-2x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Camiseta</h4>
              <p className="text-center">Camiseta preta</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        <div className="card">
          <div className="card-header text-muted">15/04/2025</div>
          <div className="card-body d-flex">
            {/* i.fa-solid.fa-alarm-clock */}
            {/* .d-flex.align-items-center */}
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-bowling-ball fa-2x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Bola de boliche</h4>
              <p className="text-center">Uma bola de boliche</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6 col-xxl-3">
        
          <div className="card">
          <div className="card-header text-muted">15/04/2025</div>
          <div className="card-body d-flex">
            {/* i.fa-solid.fa-alarm-clock */}
            {/* .d-flex.align-items-center */}
            <div className="d-flex align-items-center">
              <i className="fa-solid fa-bicycle fa-2x"></i>
            </div>
            <div className="ms-2 flex-grow-1 border rounded p-2">
              <h4 className="text-center">Bicicleta</h4>
              <p className="text-center">Uma bicicleta 18 marchas</p>
            </div>
          </div>
        
        </div>
       </div>   
    </div>
  </div>
)


export default App