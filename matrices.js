var i = 0;
var j = 0;
var dim = 0;
t1 = [1,1,1,1];
t2 = [2,2,2];
t3 = [3,3];
var t1p1 = [1,1,1,1];
var t2p1 = [2,2,2];
var t3p1 = [3,3];
var t1p2 = [1,1,1,1];
var t2p2 = [2,2,2];
var t3p2 = [3,3];

var t1p1sink = false;
var t2p1sink = false;
var t3p1sink = false;
var t1p2sink = false;
var t2p2sink = false;
var t3p2sink = false;
var t1allsink = false;
var t2allsink = false;

function hackInitMatriz(dimension)
{
  var matriz = [];

  for (i = 0; i < dimension; i ++)
  {
    matriz[i] = new Array(dimension);
  }

  for (i = 0; i < dimension; i ++)
  {
    for (j = 0; j < dimension; j ++)
    {
      matriz[i][j] = "*";
    }
  }
  return matriz;
}

function hackPrintMatriz(arr)
{
  var matrizAString = [];

  for (i = 0; i < arr.length; i ++)
  {
    for (j = 0; j < arr.length; j ++)
    {
      if(arr[i][j] == 1 || arr[i][j] == 2 || arr[i][j] == 3)
      {
        matrizAString.push("*");
        matrizAString.push(" ");
      }
      else
      {
        matrizAString.push(arr[i][j]);
        matrizAString.push(" ");
      }
      // matrizAString.push(arr[i][j]);
      // matrizAString.push(" ");
    }
    matrizAString.push("\n");
  }
  console.log(matrizAString.join(""));
}

function hackJugador1(arr)
{
  var x = 0;
  var y = 0;
  var z = 0;
  var t1pos = "";
  var t2pos = "";
  var t3pos = "";
  var t1vh = "";
  var t2vh = "";
  var t3vh = "";
  var t1x = 0;
  var t2x = 0;
  var t3x = 0;
  var t1y = 0;
  var t2y = 0;
  var t3y = 0;


  alert('Jugador1, coloca tus barcos');

  do
  {
    t1pos = prompt('Introduzca coordenadas de T1 (X:Y)');
  }while(t1pos[1] != ':' || t1pos[0] < 0 || t1pos[0] > arr.length - 1 || t1pos[2] > arr.length - 1);
  do
  {
    t1vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t1vh != 'v' && t1vh != 'h' || t1vh == 'v' && (arr.length - 1) - (parseInt(t1pos[2], 10) + t1.length - 1) < 0 || t1vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t1.length - 1) < 0);
  
  t1x = parseInt(t1pos[2], 10);
  t1y = parseInt(t1pos[0], 10);

  do
  {
    if (t1vh == 'v')
    {
      arr[t1x+x][t1y] = t1[x];
      x++;
    }
    else if (t1vh == 'h')
    {
      arr[t1x][t1y+x] = t1[x];
      x++;
    }
  }while(x < t1.length);

do
{
  do
  {
    t2pos = prompt('Introduzca coordenadas de T2 (X:Y)');
  }while(t2pos[1] != ':' || t2pos[0] < 0 || t2pos[0] >= arr.length || t2pos[2] >= arr.length);
  do
  {
    t2vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t2vh != 'v' && t2vh != 'h' || t2vh == 'v' && (arr.length - 1) - (parseInt(t2pos[2], 10) + t2.length - 1) < 0 || t2vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t2.length - 1) < 0);

  t2x = parseInt(t2pos[2], 10);
  t2y = parseInt(t2pos[0], 10);
}while(arr[t2x][t2y] != '*');

  do
  {
    if (t2vh == 'v')
    {
      arr[t2x+y][t2y] = t2[y];
      y++;
    }
    else if (t2vh == 'h')
    {
      arr[t2x][t2y+y] = t2[y];
      y++;
    }
  }while(y < t2.length);

do
{
  do
  {
    t3pos = prompt('Introduzca coordenadas de T3 (X:Y)');
  }while(t3pos[1] != ':' || t3pos[0] < 0 || t3pos[0] > arr.length || t3pos[2] > arr.length);
  do
  {
    t3vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t3vh != 'v' && t3vh != 'h' || t3vh == 'v' && (arr.length - 1) - (parseInt(t1pos[2], 10) + t3.length - 1) < 0 || t1vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t3.length - 1) < 0);
  
  t3x = parseInt(t3pos[2], 10);
  t3y = parseInt(t3pos[0], 10);
}while(arr[t3x][t3y] != '*');

  do
  {
    if (t3vh == 'v')
    {
      arr[t3x+z][t3y] = t3[z];
      z++;
    }
    else if (t3vh == 'h')
    {
      arr[t3x][t3y+z] = t3[z];
      z++;
    }
  }while(z < t3.length);

  return arr;
}

function hackJugador2(arr)
{
  var x = 0;
  var y = 0;
  var z = 0;
  var t1pos = "";
  var t2pos = "";
  var t3pos = "";
  var t1vh = "";
  var t2vh = "";
  var t3vh = "";
  var t1x = 0;
  var t2x = 0;
  var t3x = 0;
  var t1y = 0;
  var t2y = 0;
  var t3y = 0;

  alert('Jugador2, coloca tus barcos');

  do
  {
    t1pos = prompt('Introduzca coordenadas de T1 (X:Y)');
  }while(t1pos[1] != ':' || t1pos[0] < 0 || t1pos[0] > arr.length - 1 || t1pos[2] > arr.length - 1);
  do
  {
    t1vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t1vh != 'v' && t1vh != 'h' || t1vh == 'v' && (arr.length - 1) - (parseInt(t1pos[2], 10) + t1.length - 1) < 0 || t1vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t1.length - 1) < 0);
  
  t1x = parseInt(t1pos[2], 10);
  t1y = parseInt(t1pos[0], 10);

  do
  {
    if (t1vh == 'v')
    {
      arr[t1x+x][t1y] = t1[x];
      x++;
    }
    else if (t1vh == 'h')
    {
      arr[t1x][t1y+x] = t1[x];
      x++;
    }
  }while(x < t1.length);

  do
  {
    t2pos = prompt('Introduzca coordenadas de T2 (X:Y)');
  }while(t2pos[1] != ':' || t2pos[0] < 0 || t2pos[0] >= arr.length || t2pos[2] >= arr.length);
  do
  {
    t2vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t2vh != 'v' && t2vh != 'h' || t2vh == 'v' && (arr.length - 1) - (parseInt(t2pos[2], 10) + t2.length - 1) < 0 || t2vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t2.length - 1) < 0);

  t2x = parseInt(t2pos[2], 10);
  t2y = parseInt(t2pos[0], 10);

  do
  {
    if (t2vh == 'v')
    {
      arr[t2x+y][t2y] = t2[y];
      y++;
    }
    else if (t2vh == 'h')
    {
      arr[t2x][t2y+y] = t2[y];
      y++;
    }
  }while(y < t2.length);

  do
  {
    t3pos = prompt('Introduzca coordenadas de T3 (X:Y)');
  }while(t3pos[1] != ':' || t3pos[0] < 0 || t3pos[0] > arr.length || t3pos[2] > arr.length);
  do
  {
    t3vh = prompt('Introduzca la orientación (V:H)').toLowerCase();
  }while(t3vh != 'v' && t3vh != 'h' || t3vh == 'v' && (arr.length - 1) - (parseInt(t1pos[2], 10) + t3.length - 1) < 0 || t1vh == 'h' && (arr.length - 1) - (parseInt(t1pos[0], 10) + t3.length - 1) < 0);
  
  t3x = parseInt(t3pos[2], 10);
  t3y = parseInt(t3pos[0], 10);

  do
  {
    if (t3vh == 'v')
    {
      arr[t3x+z][t3y] = t3[z];
      z++;
    }
    else if (t3vh == 'h')
    {
      arr[t3x][t3y+z] = t3[z];
      z++;
    }
  }while(z < t3.length);

  return arr;
}

function startGame(jugador1, jugador2)
{
  var ataquex = 0;
  var ataquey = 0;
  var i = 0;
  var a;
  var b;

  do
  {
    a = prompt('Jugador1, indique posicion a atacar (X:Y)').toLowerCase();
    ataquex = parseInt(a[2], 10);
    ataquey = parseInt(a[0], 10);

    if (jugador2[ataquex][ataquey] != '*')
    {
      if(jugador2[ataquex][ataquey] == 1)
      {
        alert('HIT');
        jugador1[ataquex][ataquey] = 'X';
        jugador2[ataquex][ataquey] = '@';
        t1p1.pop();
        if (t1p1.length < 1 )
        {
          t1p1sink = true;
        }
      }
      if(jugador2[ataquex][ataquey] == 2)
      {
        alert('HIT');
        jugador1[ataquex][ataquey] = 'X';
        jugador2[ataquex][ataquey] = '@';
        t2p1.pop();
        if (t2p1.length < 1 )
        {
          t2p1sink = true;
        }
      }
      if(jugador2[ataquex][ataquey] == 3)
      {
        alert('HIT');
        jugador1[ataquex][ataquey] = 'X';
        jugador2[ataquex][ataquey] = '@';
        t3p1.pop();
        if (t3p1.length < 1 )
        {
          t3p1sink = true;
        }
      }
    }
    else
    {
      alert('MISS');
      jugador1[ataquex][ataquey] = 'F';
    }
    
    if (t1p1sink === true && t2p1sink === true && t3p1sink === true)
    {
      t1allsink = true;
      alert('Player1 GANADOR');
      break;
    }
    hackPrintMatriz(jugador1);

    b = prompt('Jugador2, indique posicion a atacar (X:Y)').toLowerCase();
    ataquex = parseInt(b[2], 10);
    ataquey = parseInt(b[0], 10);

    if (jugador1[ataquex][ataquey] != '*')
    {
      if(jugador1[ataquex][ataquey] == 1)
      {
        alert('HIT');
        jugador2[ataquex][ataquey] = 'X';
        jugador1[ataquex][ataquey] = '@';
        t1p2.pop();
        if (t1p2.length < 1 )
        {
          t1p2sink = true;
        }
      }
      if(jugador1[ataquex][ataquey] == 2)
      {
        alert('HIT');
        jugador2[ataquex][ataquey] = 'X';
        jugador1[ataquex][ataquey] = '@';
        t2p2.pop();
        if (t2p2.length < 1 )
        {
          t2p2sink = true;
        }
      }
      if(jugador1[ataquex][ataquey] == 3)
      {
        alert('HIT');
        jugador2[ataquex][ataquey] = 'X';
        jugador1[ataquex][ataquey] = '@';
        t3p2.pop();
        if (t3p2.length < 1 )
        {
          t3p2sink = true;
        }
      }
    }
    else
    {
      alert('MISS');
      jugador2[ataquex][ataquey] = 'F';
    }
    hackPrintMatriz(jugador2);

    if (t1p2sink === true && t2p2sink === true && t3p2sink === true)
    {
      t2allsink = true;
      alert('Player2 GANADOR');
      break;
    }
  }while(t2allsink === false || t1allsink === false);
}

function main()
{
  do
  {
    dim = prompt('Tamaño del tablero:');
  }while(dim <= 0 || dim > 9);

  var mat = hackInitMatriz(dim);
  var mat2 = hackInitMatriz(dim);
  var player1 = hackJugador1(mat);
  hackPrintMatriz(player1);
  var player2 = hackJugador2(mat2);
  hackPrintMatriz(player2);
  startGame(player1,player2);
}

main();