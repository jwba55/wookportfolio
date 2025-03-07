package com.introduce.jungjiwook;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@RequestMapping
@Controller
public class MainController {

    @GetMapping("/")
    public String getMain() {

        return "index";
    }

    @GetMapping("/topmenu")
    public String topmenu() {
        return "topmenu";
    }

    @GetMapping("/aboutMe")
    public String aboutMe() {
        return "aboutMe";
    }

    @GetMapping("/portfolio")
    public String portfolio() {
        return "portfolio";
    }

    @GetMapping("/study")
    public String study() {
        return "study";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

}
