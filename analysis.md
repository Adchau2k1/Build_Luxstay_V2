-> Các file .txt sẽ không bị git theo dõi sửa cấu hình trong file: .gitignore
-> Không thể tắt theo dõi file tạo ra trc khi file .gitignore được tạo ra

-- Phân tích giao diện trang Luxstay --

-- Header -- [developing - 95%]
-> Add keyframes in search
-> Fix hover in search-date
-> Fix button animation

.grid.wide {
    .row {
        .col {
            .header-logo > a > img
            .header-search {
                .search-wrapper {
                .search-field
                .search-btn
                }
            }
        }
        
        .col {
            .header-menu {
                .menu-wrapper {
                ul > li*5
                }
            }
        }
    }
}

-- Home-page --
.grid.wide {
    -- Home page --
    .banner {
        a>img
        ul.list-dot {
            li.list-dot__item * 2 > button.control
        }
    }

    -- Greeting --

    -- Section -- 
    div.section {
        div.title {
            h1.title__heading
            p.title__desc
    }

    div.slider {
        button.slick__button-back
        button.slick__button-next
        ul.slick {
            li.slick__item > a.slick__item-link {
                img.slick__item-img
                slick__item-content {
                    p.content__title
                    p.content__text
                }
            }
        }
    }
    }
}

-- Footer --