let i = 15; // biểu thức 1: Khởi tạo biến lớn
while (i < 15) {// biểu thức 2: điều kiện lớn
    console.log("while loop: + i");
    i++;//biểu thức 3: thay đổi biên lập sau mỗi lần lập
};

// vòng lặp do while sẽ thực hiện code ít nhất 1 lần
do {
    console.log("do while loop:" + i);
    i++;
} while (i < 15);


for (let j = 1; j > -10; j--) {
    console.log(j)
}
//array: mảng-dùng để lưu nhiều biến số 
//create
//console.log(list_name);
//list_name.push("như");
//console.log(list_name);

//read
//console.log(list_name[4]);
//update
//list name_[0] = "thắng";
//console.log(list name);

//delete
//list_name.pop();//pop là xóa phần tử cuối cungd trong mảng\
//list_name.splice(2, 1);// xóa phần tử ở bất kì vị trí tham số đầu là vị trí bắt đầu xóa, tham số thứ 2 là só phần tử muốn xóa
//console.log(list_name);
let user = {
    name: "Linh",
    age: 15,
    job: "student",
    location: "HCM"
};
//read
console.log(user);
console.log(user.job);
console.log(typeof (user));





//Create
user.company = "school";
console.log(user);


//update
user.location = "HN"
console.log(user);


//delete
delete user.compamy
console.log(user);



let mycomputer = {
    brand: "Lenovo",//h3
    os: "window",//p
    ram: 16,//p
    ssd: 512,//p
    weight: "1.5kg",//p 
    img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffptshop.com.vn%2Fmay-tinh-xach-tay&psig=AOvVaw0rlVWvF-_LAtM8zFm6CWTc&ust=1680425197340000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOC07fSBh_4CFQAAAAAdAAAAABAO.jpg"



}
let product = document.getElementById("product");
product.style = "border:1px soil red ";
let img = document.createElement("img");
img.src = mycomputer.img;
product.appendChild(img);

let brand = document.createElement("h3");
brand.innerText = mycomputer.brand;
product.appendChild(brand);

let os = document.createElement("p");
os.innerText = mycomputer.os;
product.appendChild(os);

let ram = document.createElement("p");
ram.innerText = mycomputer.ram;
product.appendChild(ram);

let ssd = document.createElement("p");
ssd.innerText = mycomputer.ssd;
product.appendChild(ssd);



