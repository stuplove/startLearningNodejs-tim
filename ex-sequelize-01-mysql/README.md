#npm 之外的事前的準備

1. 你必須要有 mysql
2. 建立登入 mysql 帳號
3. 建立一個 database , 在此命名為 sequelize_db



#command line

	npm init

	...

	//安裝套件
	npm i -S mysql
	npm i -S sequelize

	// 執行
	node app.js


#執行說明

1. 會在 sequelize_db 新增一個 `Users` table,
2. 塞入一筆資料
