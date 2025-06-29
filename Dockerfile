# ==================================================
# STEP 1: Build and publish
# ==================================================
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src

# Copy the solution and project files first for better caching
COPY ["InfiniteGuide_Corner.sln", "./"]
COPY ["src/Infyguide_corner/Infyguide_corner.csproj", "src/Infyguide_corner/"]

# Restore dependencies
RUN dotnet restore "src/Infyguide_corner/Infyguide_corner.csproj"

# Copy the rest of the application files
COPY . .

# Build and publish the app in Release mode
RUN dotnet publish "src/Infyguide_corner/Infyguide_corner.csproj" -c Release -o /app/publish

# ==================================================
# STEP 2: Final Image (Runtime)
# ==================================================
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app

# Copy only the published output from the build stage
COPY --from=build /app/publish .

# Set the port to match your app's internal port
ENV ASPNETCORE_URLS=http://+:5053

# Expose the port to the container
EXPOSE 5053

# Run the app
ENTRYPOINT ["dotnet", "Infyguide_corner.dll"]