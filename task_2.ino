  int ldr = A0;		//assigning ldr pin no.
  int led = 2;		//assigning bulb pin no.
  
  void setup()
  {
    pinMode(led, OUTPUT);	//setting pinmode as output
    pinMode(ldr, INPUT);	//setting pinmode as input
  }

  void loop()
  {
    if ( analogRead(ldr) > 500)	//reading light intensity
      digitalWrite(led, 0);	//turn OFF condition
    
    else
      digitalWrite(led, 1);	//turn ON condition
  }
