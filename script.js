const lunch = {
    밥 : "흑미밥",
    국 : "소고기 무국",
    메인반찬 : "닭강정",
    반찬1 : "김치",
    반찬2 : "콩나물 무침",
    반찬3 : "도라지 무침",
};

localStorage.setItem("lunch", lunch);

localStorage.removeItem("lunch");

localStorage.setItem("밥", "흑미밥");
localStorage.setItem("국", "소고기 무국");
localStorage.setItem("메인 반찬 1", "닭강정");
localStorage.setItem("메인 반찬 2", "잡채");
localStorage.setItem("반찬 1", "김치");
localStorage.setItem("반찬 2", "콩나물 무침");
localStorage.setItem("반찬 3", "도라지 무침");


function getitem(){
    let dropdown = document.getElementById("getOption");
    let getvalue = dropdown.value

    const storagevalue = localStorage.getItem(getvalue);
    alert(storagevalue);
}

function removeitem(){
    let dropdown = document.getElementById("removeOption");
    let removevalue = dropdown.value

    localStorage.removeItem(removevalue);
    alert(removevalue + "(이)가 삭제 되었습니다.");
}

function clearitem(){
    localStorage.clear();
    alert("비우기 완료! 다시 채우려면 새로고침 해주세요.");
}