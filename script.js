document.addEventListener("DOMContentLoaded", function (e) { 
    let configId = document.querySelector("#id i");
    let idText = document.querySelector("#id span");

    configId.addEventListener("click", function (e) {
        idText.textContent = prompt("새로운 아이디를 입력하세요.");
    });

    let profileEditButton = document.querySelector("#profile_info button");
    let userInfo =  document.querySelector("#userInfo");
    // 직업
    let summary = document.querySelector("#summary");
    // 사이트
    let profileDetail = document.querySelector("#profileDetail");

    let changing = false;
    // 프로필 편집 버튼을 눌렀을 때
    profileEditButton.addEventListener("click", function (e) {
        if (changing) {
            let _userInfo = userInfo.querySelector("input").value;
            let _summary = summary.querySelector("input").value;
            let _profileDetail = profileDetail.querySelector("input").value;

            userInfo.innerHTML = _userInfo;
            summary.innerHTML = _summary;
            console.log(_profileDetail);
            if (_profileDetail.startsWith("https")) {
                _profileDetail = "<a href = "  + _profileDetail + " > " + _profileDetail + "</a>";
            }
            profileDetail.innerHTML = _profileDetail;

            // 버튼 텍스트 수정
            e.target.textContent = "프로필 편집";
            changing = false;
        } else {
            // 현재 프로필에 있는 값을 변수에 담아 놓는다.
            let _userinfo = userInfo.textContent;
            let _summary = summary.textContent;
            let _profileDetail = profileDetail.textContent;

            console.log(_profileDetail);

            userInfo.innerHTML = "<input value =" + _userinfo + ">";
            summary.innerHTML = "<input value =" + _summary + ">";
            profileDetail.innerHTML = "<input value =" + _profileDetail + ">";

            e.target.textContent = "프로필 편집 완료";
            changing = true;
        }
    });

    let profile_pic = document.querySelector("#profile_pic .circle_pic");

    profile_pic.addEventListener("mouseover", (e) => {
        e.target.style.filter = "grayscale(50%)";
    });
    profile_pic.addEventListener("mouseleave", (e) => {
        e.target.style.filter = "grayscale(0%)";
    });
    profile_pic.addEventListener("click", (e) => {
        profile_pic.setAttribute("src", prompt("이미지 url을 입력해주세요."));
    });

});