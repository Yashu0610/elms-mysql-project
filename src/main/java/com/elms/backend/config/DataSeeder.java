package com.elms.backend.config;

import com.elms.backend.model.User;
import com.elms.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
public class DataSeeder {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        return args -> {
            if (userRepository.findByUsername("admin").isEmpty()) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword(passwordEncoder.encode("pass")); // default password
                admin.setEmail("admin@example.com");
                admin.setRoles("ROLE_ADMIN,ROLE_USER");
                userRepository.save(admin);
                System.out.println("Seeded default admin user: username=admin, password=pass");
            }
        };
    }
}
