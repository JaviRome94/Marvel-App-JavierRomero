import React from 'react'
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import {useState} from 'react';

function personajes({per}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

    return (

        <div className="col mt-5">
              <div className="card" style={{ width: '15rem', height: '15rem', margin: '80px' }}>
                <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top" style={{ width: '100%', height: '100%'}} />
                <div className="card-body">
                  <p className="card-text" style={{ color: 'white'}}> {per.series.name} </p>
                  <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
                  
                  
                  
                <Button className="btn btn-primary" type="primary" onClick={showModal} style={{ width: '110px', height: '40px' }}>descripción</Button>
                    
                <Modal title={per.series.name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    
                    <div className="card mb-3">
                     <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} style={{ width: '100%', maxHeight: '500px' }} />
                      <div className="card-body">
                        <p className="card-text">{per.description}</p>
                        <p className="card-text"><small className="text-muted">Última actualización hace 4 minutos</small></p>
                      </div>
                    </div>

                </Modal>


                </div>
              </div>
              
            </div>
        

   )

   

}

export default personajes 