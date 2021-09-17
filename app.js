const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

const PORT = process.env.PORT || 3000

// 載入 method-override
const methodOverride = require('method-override')
// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

const bodyParser = require('body-parser')
// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

// 引用路由器,引入路由器時，路徑設定為 /routes 就會自動去尋找目錄下叫做 index 的檔案
const routes = require('./routes')
// 將 mongoose 導入
require('./config/mongoose')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(routes)



app.listen(PORT, () => {
  console.log(`run on http://localhost:${PORT}`)
})
