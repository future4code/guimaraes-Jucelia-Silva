import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png" 
          nome="Jucélia Xavier" 
          descricao="Oi, eu sou a Jucélia. Sou desenvolvedora full stack  adoro tecnologia e descrobrir coisas novas todos os dias."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

    <div
      className='pequeno-card-container'>
        <CardPequeno
        imagem="https://cdn-icons.flaticon.com/png/128/69/premium/69957.png?token=exp=1643334551~hmac=96f816e8a8a3fac48e299a0d1937164e"
      nome="email:"
      descricao="juceliaxavier@gmail.com"
        />

      </div>
      <div className='pequeno-card-container'>
        <CardPequeno
        imagem="https://www.flaticon.com/br/icone-gratis/endereco-residencial_1239525"
        nome="Endereço:"
        descricao="Sertãozinho/SP"
        />


      </div> 

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Revelo" 
          descricao="Recrutamento e seleção de pessoas da area de tecnologia!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jng" 
          nome="99Hunter" 
          descricao="Recrutamento e seleção de pessoas da area de tecnologia!." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
