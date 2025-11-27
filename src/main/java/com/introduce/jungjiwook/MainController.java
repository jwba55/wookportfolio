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

}
