// form append to single div
let dom_form = document.createElement("div");
dom_form.innerHTML = `
<div class="container">
    <div class="row">
        <div class="col head text-center m-4">
            <h1 id="title" class="bg-secondary text-white">DOM MANIPULATION FORM</h1>
            <p id="description">Fill the all fields Mandatory</p>
        </div>
    </div>
</div>

<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="co_1 col-lg-3">

            <form id="form">
                <div class="form-group fw-bold">
                <label for="firstname">First Name</label> <br>
                <input type="text" name="firstname"  id="first-name" placeholder="Enter Your FirstName" required> <br>
                </div>    
        
                <div class="form-group fw-bold">
                <label for="lastname">Last Name</label> <br>
                <input type="text" name="lastname"  id="last-name" placeholder="Enter Your LastName" required> <br>
                </div>
        
                <div class="form-group fw-bold">
                <label for="address">Address</label> <br>    
                <textarea id="address" placeholder="description"></textarea>
                </div>
        
                <div class="form-group fw-bold">
                <label for="pincode">Pincode</label> <br>
                <input type="text" name="pincode" id="pincode" placeholder="Enter Your Pincode" required> <br>
                </div>
        
                <div class="form-group">
                <label for="gender" class="fw-bold">Gender</label> <br>
                <input type="radio" name="gender" id="male" value="male"> Male 
                <input type="radio" name="gender" id="female" value="female"> Female  <br>
                </div>    
        
                <div class="form-group">
                <label for="food" class="fw-bold">Choice of Foods</label> <br>
                <input type="checkbox" name="food" id="food" value="Biriyani"> Biriyani <br>
                <input type="checkbox" name="food" id="food" value="Chappathi"> Chappathi <br>
                <input type="checkbox" name="food" id="food" value="Rice"> Rice <br>
                <input type="checkbox" name="food" id="food" value="Chicken"> Chicken <br>
                <input type="checkbox" name="food" id="food" value="Mutton"> Mutton   <br>
                </div>
        
                <div class="form-group fw-bold">
                <label for="state">State</label> <br>
                <input type="text" name="state" id="state" placeholder="Enter Your state"> <br>
                </div>    
        
                <div class="form-group fw-bold">
                <label for="country">Country</label> <br>
                <input type="text" name="country" id="country" placeholder="Enter Your country"> <br>
                </div>    
        
                <div class="form-group">
                    <button id="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>


        <div class="co_2 col-lg-8 table-responsive">
            <table class="table table-bordered">
                <thead class="table-warning">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Pincode</th>
                        <th>Gender</th>
                        <th>Food List</th>
                        <th>State</th>
                        <th>Country</th>
                    </tr>
                </thead>
                <tbody id="tbody" class="table-danger"></tbody>
            </table>
        
        </div>
    </div>
</div>
`
document.body.append(dom_form);

// Function Click Event
let submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    // Gender validation
    let gender = document.getElementsByName("gender");
    let genderValue;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderValue = gender[i].value
        }
    }

    //Food validation
    let food = document.getElementsByName("food")
    let foodList = [];
    let foodCount = 0;
    for (let i = 0; i < food.length; i++) {
        if (food[i].checked) {
            foodList.push(food[i].value)
            foodCount++
        }
    }
    if (foodList.length >= 2) {
        result = foodList.join(",")
    } else {
        result = alert("Choose atleast 2 options out of 5 in Food")
    }

    // Firstname and lastname Create the variables
    let fname = document.getElementById("first-name").value;
    let lname = document.getElementById("last-name").value;

    // Table function
    CreateTable(fname, lname, pincode.value, address.value, genderValue, result, state.value, country.value)
    fname.value = "";
    lname.value = "";
    pincode.value = "";
    address.value = "";
    genderValue = "";
    foodList = [];
    state.value = "";
    country.value = "";
})

// Table Create Function
function CreateTable(name1, name2, name3, name4, name5, name6, name7, name8) {
    let tbody = document.getElementById("tbody")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let td7 = document.createElement("td")
    let td8 = document.createElement("td")
    td1.innerHTML = name1;
    td2.innerHTML = name2;
    td3.innerHTML = name3;
    td4.innerHTML = name4;
    td5.innerHTML = name5;
    td6.innerHTML = name6;
    td7.innerHTML = name7;
    td8.innerHTML = name8;
    tbody.append(tr);
    tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
}