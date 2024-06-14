# itss2-backend
uni finals stuff

~~`npm i` để cài hết các dependencies~~

~~`npm run dev` để chạy~~

~~routes mẫu và model mẫu ở trong `./models/model.js` và `./routes/routes.js`~~

~~file .env gửi trên slack~~

đã deploy trên https://itss2-backend.onrender.com, không cần chạy local

- API chính đi qua `/api`
- Các đường nhỏ:
	-  `/api/user`: người dùng, các đường GET:
		- có thể thêm `/:id` để lấy theo id (`/api/user/665ffd49fad830ac0ceb1e64`)
		- `/phone/:number` để lấy theo sdt (`/api/user/phone/09436362287`)
	-  `/api/data_package`: các gói
		- `/duration/:number` để lấy theo thời lượng gói (tính theo ngày 1/30/365)
		- `/:id` để lấy theo id
		- `/getname/:name` để lấy theo tên chính xác
	-  `/api/Cart`: danh sách lịch sử đăng ký của user, có phone number, tên gói và thời gian đăng ký
		- `/phoneNumber/:number` để lấy theo user