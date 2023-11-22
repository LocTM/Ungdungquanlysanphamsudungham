// Tao 1 mang dang chuoi de luu danh sach san pham
let products = [
    "Macbook Pro M1",
    "Macbook Pro M2",
    "Macbook Pro M3",
    "Macbook Pro M4",
    "Macbook Pro M5",
    "Macbook Pro M6",
]
// Hien thi danh sach
function showAllProduct(){
    let content = ""
    for (let i = 0; i < products.length; i++) {
        //Moi lan lap them 1 bo the td
        // ${products[i]} dung de them dung san pham trong mang(product thu i)
        content += `  <tr>
                         <th>${products[i]}</th> 
                         <th><button onclick="editItem(${i})">Sua</button></th>
                         <th><button onclick="deleteItem(${i})">Xoa</button></th>
                      </tr>`
    }
    document.getElementById("productList").innerHTML= content;
}
showAllProduct();

//Tao moi san pham
function createNewProduct(){
    // B1: Lay du lieu trong the input
    let newP = document.getElementById("newProduct").value
    // B2: Them du lieu do vao mang (mang products)
    products.push(newP);
    // B3: Hien thi lai table
    showAllProduct()
    // B4: Xoa du lieu trong the input
    document.getElementById("newProduct").value="";
    // B5: Sau khi nhan nut tao moi, tra lai vi tri nhap trong o input
    document.getElementById("newProduct").focus();
}

//Xoa san pham
function deleteItem(index){
    //Dung ham splice de xoa phan tu tai vi tri, (vi tri, so luong phan tu can xoa)
    products.splice(index,1);
    showAllProduct();
}

//Sua san pham
function editItem(index) {
    //Lay ten san pham moi tu prompt
    let nItem = prompt("Nhap ten san pham moi:");
    products[index] = nItem;
    showAllProduct();
}