class Config {
  static TYPE = 2; //0 development //1 staging //2 production 
  static DummyMainUrl = Config?.TYPE == 2 ? 'https://mocki.io/' : Config?.TYPE == 0 ? '' : '';
  
  
  static DummySubUrl= 'v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8';
  
}

export default Config;



