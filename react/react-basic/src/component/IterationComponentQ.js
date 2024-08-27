import { useState } from "react";

// import img1 from '../img/img1.png';
/*
이미지를 가져오는 방법
1. 외부 서버에서 경로 참조 받기 (가장 일반적인 방법)

2. src밑으로 넣는경우 (img1 으로 하나의 이미지 참조가능)
import img1 from '../img/1.jpg'; 

3. public밑으로 넣는경우는 바로 참조할 수 있습니다.
*/
const IterationComponentQ = () => {

    //데이터 - public폴더밑에 예시로 사용하기 위해 넣습니다.
    const arr = [
        {src : '/img/img1.png', title : '아이폰10', price: 1000},
        {src : '/img/img2.png', title : '아이폰11', price: 2000},
        {src : '/img/img3.png', title : '아이폰12', price: 3000},
        {src : '/img/img4.png', title : '아이폰13', price: 4000},
    ]
    //1. state로 관리, 대표 이미지값을 state로 관리
    let[list, setList] = useState(arr);
    let[img, setImg] = useState('/img/img1.png');
    const handleClick = (e) => {
        
        if(e.target.tagName != "IMG") return; //특정 태그가 아니라면 종료
        let img = e.target.src; //클릭한 값의 src
        setImg(img); //state변경 - 렌더링
    }
    const newList = list.map((value, index) => 
        <div key={index} >
        
            <img src={value.src} width="100"/>
            <p>
                상품:{value.title}
            </p>
            <p>
                가격:{value.price}
            </p>
        
        </div>)

    return (
        <>
            <hr/>
            <h3>이미지 데이터 반복해보기</h3>
            {/* <img src="https://raw.githubusercontent.com/yopy0817/data_example/master/img/img1.png" alt="봄" width="100" /> */}
            {/* <img src={img1}/> */}
            <img src={img} />
            {/* 
            <div>
                <div>
                    <img src="/img/img1.png" width="100" />
                    <p>
                        제목
                    </p>
                    <p>
                        가격
                    </p>
                </div> 
            </div>
            */}
            <div>
                
            </div>
            {/* 3번 */}
            <div>
                <img />
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}
                onClick={handleClick}
                >
                {newList}
            </div>

        </>
    )

}

export default IterationComponentQ;