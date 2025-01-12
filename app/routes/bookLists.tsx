import React, { useState } from 'react';
import MyFooter from "./templates/myfooter";
import MyMenu from "./templates/mymenu";

// Mock data สำหรับรายการหนังสือ
const books = [
    {
        href : "https://www.bloggang.com/m/viewdiary.php?id=beauengin&month=12-2008&date=18&group=11&gblog=1",
        Code: "001",
        Title: "นารูโตะ",
        Cover: "https://upload.wikimedia.org/wikipedia/th/thumb/0/03/Naruto_Poster_Shonen_Jumps.jpg/250px-Naruto_Poster_Shonen_Jumps.jpg",
        Description: "นารูโตะเดอะมูฟวี่",
        Category: 1,
        Author: "ยากิโตมาโตะ",
        Publishing: "ชูเอชะ",
        Price: "40 THB",
        Bestsellers: true,
        Suggestions: false,
    },
    {
        href : "https://th.wikipedia.org/wiki/%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B9%80%E0%B8%A7%E0%B8%97%E0%B8%A2%E0%B9%8C%E0%B8%9C%E0%B8%99%E0%B8%B6%E0%B8%81%E0%B8%A1%E0%B8%B2%E0%B8%A3",
        Code: "002",
        Title: "Jujutsu Kaisen",
        Cover: "https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
        Description: "มหาเวทย์ผนึกมาร (ญี่ปุ่น: 呪術廻戦 Jujutsu Kaisen)",
        Category: 2,
        Author: " เกเงะ อากูตามิ",
        Publishing: "โชเน็งจัมป์",
        Price: "60 THB",
        Bestsellers: false,
        Suggestions: true,
    },
    {
        href : "https://th.wikipedia.org/wiki/%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B2%E0%B8%94%E0%B8%B1%E0%B8%99#:~:text=%E0%B8%94%E0%B8%B1%E0%B8%99%E0%B8%94%E0%B8%B2%E0%B8%94%E0%B8%B1%E0%B8%99%20%28%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%3A%20%E3%83%80%E3%83%B3%E3%83%80%E3%83%80%E3%83%B3%3B%20%E0%B9%82%E0%B8%A3%E0%B8%A1%E0%B8%B2%E0%B8%88%E0%B8%B4%3A%20%E0%B8%AD%E0%B8%B1%E0%B8%87%E0%B8%81%E0%B8%A4%E0%B8%A9%3ADandadan%29%20%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%99%E0%B8%8B%E0%B8%B5%E0%B8%A3%E0%B8%B5%E0%B8%AA%E0%B9%8C%E0%B8%A1%E0%B8%B1%E0%B8%87%E0%B8%87%E0%B8%B0%E0%B8%8D%E0%B8%B5%E0%B9%88%E0%B8%9B%E0%B8%B8%E0%B9%88%E0%B8%99%E0%B9%80%E0%B8%82%E0%B8%B5%E0%B8%A2%E0%B8%99%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A7%E0%B8%B2%E0%B8%94%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%AD%E0%B8%9A%E0%B9%82%E0%B8%94%E0%B8%A2%20%E0%B8%A2%E0%B8%B9%E0%B8%81%E0%B8%B4%E0%B9%82%E0%B8%99%E0%B8%9A%E0%B8%B8%20%E0%B8%97%E0%B8%B1%E0%B8%95%E0%B8%AA%E0%B8%B6,%28%E0%B8%97%E0%B8%B1%E0%B8%87%E0%B9%82%E0%B8%81%E0%B8%9A%E0%B8%87%29%20%E0%B8%97%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%AB%E0%B8%A1%E0%B8%94%2014%20%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%A1%20%E0%B8%93%20%E0%B9%80%E0%B8%94%E0%B8%B7%E0%B8%AD%E0%B8%99%E0%B8%9E%E0%B8%A4%E0%B8%A9%E0%B8%A0%E0%B8%B2%E0%B8%84%E0%B8%A1%20%E0%B8%9E.%E0%B8%A8.%20256",
        Code: "003",
        Title: "Dandadan",
        Cover: "https://upload.wikimedia.org/wikipedia/en/f/f2/Dandadan_vol._1_cover.jpg",
        Description: "ดันดาดัน (ญี่ปุ่น: ダンダダン; โรมาจิ: อังกฤษ:Dandadan)",
        Category: 3,
        Author: "ยูกิโนบุ ทัตสึ",
        Publishing: "โชเน็งจัมป์",
        Price: "50 THB",
        Bestsellers: true,
        Suggestions: false,
    },
    {
        href : "https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%99%E0%B8%9E%E0%B8%B5%E0%B8%8B",
        Code: "004",
        Title: "One Piece",
        Cover: "https://upload.wikimedia.org/wikipedia/th/a/ab/One_Piece%2C_volume_1_thai_version.jpg",
        Description: "วันพีซ (ญี่ปุ่น: ワンピース; โรมาจิ: Wan Pīsu; ทับศัพท์: ในชื่ออังกฤษ One Piece)",
        Category: 4,
        Author: "เออิจิโระ โอดะ",
        Publishing: "โชเน็นจัมป์",
        Price: "100 THB",
        Bestsellers: true,
        Suggestions: true,
    },
    {
        href : "https://th.wikipedia.org/wiki/%E0%B8%84%E0%B8%A3%E0%B8%B9%E0%B8%9E%E0%B8%B4%E0%B9%80%E0%B8%A8%E0%B8%A9%E0%B8%88%E0%B8%AD%E0%B8%A1%E0%B8%9B%E0%B9%88%E0%B8%A7%E0%B8%99_%E0%B8%A3%E0%B8%B5%E0%B8%9A%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%99!",
        Code: "005",
        Title: "Reborn!",
        Cover: "https://upload.wikimedia.org/wikipedia/th/thumb/7/79/Hitman_Reborn_Volume_01.jpg/330px-Hitman_Reborn_Volume_01.jpg",
        Description: "ครูพิเศษจอมป่วน รีบอร์น! (ญี่ปุ่น: 家庭教師ヒットマンReborn!; โรมาจิ: Katekyō Hittoman Ribōn!)",
        Category: 5,
        Author: "อะกิระ อะมะโนะ",
        Publishing: "โชเน็นจัมป์",
        Price: "150 THB",
        Bestsellers: false,
        Suggestions: true,
    },
];

// Component สำหรับแสดงสถานะ "แนะนำ" หรือ "ขายดี"
const StatusCheck = ({ isBestseller, isSuggestion }: { isBestseller: boolean; isSuggestion: boolean }) => {
    return (
        <div>
             {isBestseller && <span className="text-black">{'🔥 ขายดี!'}</span>}
             {isSuggestion && <span className="text-black">{'✨ แนะนำ'}</span>}
        </div>
    );
};

const BookList = () => {
    const [filter, setFilter] = useState<'all' | 'bestseller' | 'suggestion'>('all'); // สถานะการกรอง
    
    // กรองรายการหนังสือตามประเภท
    const filteredBooks = books.filter(book => {
        if (filter === 'all') return true;
        if (filter === 'bestseller' && book.Bestsellers) return true;
        if (filter === 'suggestion' && book.Suggestions) return true;
        return false;
    });

    // Map ข้อมูลหนังสือเพื่อแสดงใน UI
    const listItems = filteredBooks.map((book, index) => (
        <div className="m-3" key={index}>
            <a
                href={book.href} // ใช้ลิงก์ที่ถูกต้องจากข้อมูล
                target="_blank" // เปิดในหน้าต่างใหม่
                rel="noopener noreferrer" // ป้องกันปัญหาด้านความปลอดภัย
                className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
                <img src={book.Cover} alt={book.Title} className="mb-3 w-full h-50 object-cover rounded-lg" />
                <b className="text-base">
                    <StatusCheck isBestseller={book.Bestsellers} isSuggestion={book.Suggestions} />
                </b>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {book.Title + " (รหัส: " + book.Code + ")"}
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{book.Description}</p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ผู้แต่ง:</strong> {book.Author}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>สำนักพิมพ์:</strong> {book.Publishing}
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    <strong>ราคา:</strong> {book.Price}
                </p>
            </a>
        </div>
    ));

    return (
        <div className="m-3">
            <MyMenu />
            <div className="mb-4">
                {/* ปุ่มสำหรับกรองข้อมูล */}
                <button onClick={() => setFilter('all')} className="mr-2 px-4 py-2 bg-red-500 text-white rounded">ทั้งหมด</button>
                <button onClick={() => setFilter('bestseller')} className="mr-2 px-4 py-2 bg-green-500 text-white rounded">ขายดีมาก</button>
                <button onClick={() => setFilter('suggestion')} className="mr-2 px-4 py-2 bg-pink-500 text-white rounded">แนะนำมากก</button>
            </div>
            <strong className="text-xl">หนังสือที่แนะนำ</strong>
            <br />
            <strong className="text-xl">ข้อมูลอ้างอิงมาจาก google</strong>
            {listItems}
            <MyFooter />
        </div>
    );
};

export default BookList;