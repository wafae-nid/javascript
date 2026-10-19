// function function1()
// {
//     console.log('hello');
//     console.log(2+2);
// }
// function1();
function rps_move()
{
    let value = Math.random();
    let move;
    if(value <1/3)
        move = 'scissors';
    else if(1/3 <= value && value <2/3)
        move = 'paper';
    else
        move ='rock';
    return(move);
}
     