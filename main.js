function OnButtonClick(){
        var stamina = document.getElementById("stamina").value;
        var sd10 = document.getElementById("sd10").value;
        var sd20 = document.getElementById("sd20").value;
        var sd30 = document.getElementById("sd30").value;
        var sdmax = document.getElementById("sdmax").value;
        var target = document.getElementById("output");

        if (stamina <= 0){
          target.innerHTML= "エラー：有効な元気の値を入力してください";
        }else if (stamina < 60 || stamina > 240){
          target.innerHTML="エラー：元気上限には60から240までの数値を入力してください"
        } else {
          var allstamina = 10*sd10 + 20*sd20 + 30*sd30 + stamina*sdmax;
          var jewel = 50*(Math.floor(allstamina/stamina));
          var surplus = allstamina%stamina;
          target.innerHTML = "ミリオンジュエル："+jewel+"個、余った元気："+surplus;
        }
      }