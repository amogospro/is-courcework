Security tooling setup

This project runs OWASP Dependency-Check and SpotBugs (with FindSecBugs) as part of Gradle `check`.

NVD API key (required)

Dependency-Check requires an NVD API key and will fail fast if it is missing.

Set the environment variable before running Gradle:

Linux/macOS
```
export NVD_API_KEY=3a45ec91-ba3d-4f50-91d4-bb7f8acbedac
```

Windows PowerShell
```
$env:NVD_API_KEY = "3a45ec91-ba3d-4f50-91d4-bb7f8acbedac"
```

Gradle usage examples
```
./gradlew :server:clean :server:build --stacktrace
./gradlew :server:check --stacktrace
./gradlew :server:bootRun --stacktrace
```
