
export default function Profile(data) {

    const {fullname , phone ,area ,address ,plan} = data;

    const profilehtml = `
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
      body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f5f5f5;
      }
      .profile-card {
        max-width: 400px;
        margin: 50px auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      .header {
        background-color: #44c767;
        color: #ffffff;
        padding: 20px;
        text-align:center;
      }
      .logo {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 0 auto 15px;
        object-fit: cover;
      }
      .username {
        font-size: 24px;
        font-weight: bold;
        margin: 0 0 30px 0;
      }
      .card {
        display: flex;
        padding: 5px;
        background: rgb(223, 223, 223);
        gap: 5px;
        font-size: 16px;
        color: rgb(221, 240, 223);
      }
      .order {
        font-size: 14px;
        padding: 10px 0;
        text-align: center;
      }
      .head{
    background-color: #f3f3f3;
      }
      .plan{
        background-color:gold;
        color: black;
        font-size: 20px;
        border-radius: 8px;
      }
      .icons {
        display: flex;
        justify-content: center;
        margin-top: 10px;
      }
      .icon {
        font-size: 24px;
        color: #44c767;
        margin: 0 10px;
        transition: color 0.3s;
      }
      .icon:hover {
        color: #228b22;
      }
      .info-table {
        max-width: 400px;
        margin: 20px auto;
        background-color: #ffffff;
        border-radius: 10px;
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
      }
      table {
        width: 100%;
        border-collapse: collapse;
        color:black;
      }
      th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
      }
      th {
        text-align: left;
        background-color: #f2f2f2;
      }
    </style>
    </head>
    <body>
      <div class="profile-card">
        <div class="order head">New Order</div>
        <div class="header">
          <img src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png" alt="profile" class="logo">
          <div class="username">${fullname}</div>
          <div class="info-table">
            <table>
              <tr>
                <th>Phone</th>
                <td><a href="tel:845165465"></a>${phone}</td>
              </tr>
              <tr>
                <th>Area</th>
                <td>${area}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>${address}</td>
              </tr>
            </table>
        </div>
        <div class="plan order">${plan}</div>
      </div>
    </body>
    </html>
    

`;

    return profilehtml;
}